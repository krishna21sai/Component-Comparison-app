import { NextResponse } from 'next/server';
// Build-trigger to ensure latest code is deployed
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const LIBRARY_PROMPTS = {
  shadcn: (userPrompt: string, currentCode?: string) => {
    if (currentCode) {
      return `You are an expert React developer specializing in Shadcn UI components.
      
      Here is the EXISTING code for a component:
      \`\`\`tsx
      ${currentCode}
      \`\`\`
      
      User Request for Modification: "${userPrompt}"
      
      Requirements:
      - MODIFY the existing code to satisfy the user request.
      - Maintain the existing structure and imports unless changes are required.
      - Use Shadcn UI components from "@/components/ui/*"
      - Use Tailwind CSS classes via className prop
      - Output ONLY the full updated component code.
      - NO explanations, ONLY code.`;
    }
    return `You are an expert React developer specializing in Shadcn UI components.

Generate ONLY the React component code for: ${userPrompt}

Requirements:
- Use Shadcn UI components from "@/components/ui/*"
- Use Tailwind CSS classes via className prop
- Make it functional and complete
- Include proper imports
- Export as default function
- Component name should be "GeneratedComponent"
- Keep it concise but fully functional
- NO explanations, ONLY code

Example structure:
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function GeneratedComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
    </Card>
  );
}`;
  },

  mui: (userPrompt: string, currentCode?: string) => {
    if (currentCode) {
      return `You are an expert React developer specializing in Material-UI (MUI) components.
      
      Here is the EXISTING code for a component:
      \`\`\`tsx
      ${currentCode}
      \`\`\`
      
      User Request for Modification: "${userPrompt}"
      
      Requirements:
      - MODIFY the existing code to satisfy the user request.
      - Maintain the existing structure and imports unless changes are required.
      - Use Material-UI components from '@mui/material'
      - Use sx prop for styling
      - Output ONLY the full updated component code.
      - NO explanations, ONLY code.
      `;
    }
    return `You are an expert React developer specializing in Material-UI (MUI) components.

Generate ONLY the React component code for: ${userPrompt}

Requirements:
- Use Material-UI components from '@mui/material'
- Use sx prop for styling
- Make it functional and complete
- Include proper imports
- Export as default function
- Component name should be "GeneratedComponent"
- Keep it concise but fully functional
- NO explanations, ONLY code


Example structure:
import { Card, CardHeader, Typography } from '@mui/material';

export default function GeneratedComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Title" />
    </Card>
  );
}`;
  },

  antd: (userPrompt: string, currentCode?: string) => {
    if (currentCode) {
      return `You are an expert React developer specializing in Ant Design components.
      
      Here is the EXISTING code for a component:
      \`\`\`tsx
      ${currentCode}
      \`\`\`
      
      User Request for Modification: "${userPrompt}"
      
      Requirements:
      - MODIFY the existing code to satisfy the user request.
      - Maintain the existing structure and imports unless changes are required.
      - Use Ant Design components from 'antd'
      - Use style prop or className for styling
      - Output ONLY the full updated component code.
      - NO explanations, ONLY code.
      `;
    }
    return `You are an expert React developer specializing in Ant Design components.

Generate ONLY the React component code for: ${userPrompt}

Requirements:
- Use Ant Design components from 'antd'
- Use style prop or className for styling
- Make it functional and complete
- Include proper imports
- Export as default function
- Component name should be "GeneratedComponent"
- Keep it concise but fully functional
- NO explanations, ONLY code


Example structure:
import { Card } from 'antd';
const { Meta } = Card;

export default function GeneratedComponent() {
  return (
    <Card hoverable style={{ width: 240 }}>
      <Meta title="Title" />
    </Card>
  );
}`;
  },

  chakra: (userPrompt: string, currentCode?: string) => {
    const rules = `
      Requirements:
      - Use ONLY Chakra UI v3 components from '@chakra-ui/react'.
      - IMPORTANT: Chakra v3 uses dot notation for almost EVERYTHING:
        - Card: Card.Root, Card.Header, Card.Body, Card.Footer
        - Avatar: Avatar.Root, Avatar.Image, Avatar.Fallback
        - Alert: Alert.Root, Alert.Indicator, Alert.Title
        - Menu: Menu.Root, Menu.Content, Menu.Item
        - Field (REPLACES FormControl): Field.Root, Field.Label, Field.Input, Field.HelperText, Field.ErrorText
      - STYLING RULES:
        - Use "colorPalette" NOT "colorScheme".
        - Use "gap" NOT "spacing".
        - Use "Stack" or "Flex" for layout.
      - DO NOT import or use v2 components: SimpleGrid, FormControl, FormLabel, FormHelperText, CardBody, CardFooter, CardHeader.
      - ALWAYS export as default function GeneratedComponent.
      - NO explanations, ONLY code.`;

    if (currentCode) {
      return `You are an expert React developer specializing in Chakra UI v3 components.
      
      Here is the EXISTING code:
      \`\`\`tsx
      ${currentCode}
      \`\`\`
      
      User Request for Modification: "${userPrompt}"
      
      ${rules}
      `;
    }
    return `You are an expert React developer specializing in Chakra UI v3 components.

Generate ONLY the React component code for: ${userPrompt}

${rules}

Example structure (Login Form):
import { Card, Button, Input, Stack, Field, Heading } from '@chakra-ui/react';

export default function GeneratedComponent() {
  return (
    <Card.Root maxW="sm" variant="outline">
      <Card.Header>
        <Heading size="md">Login</Heading>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input placeholder="me@example.com" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input type="password" />
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button width="full" colorPalette="blue">Sign In</Button>
      </Card.Footer>
    </Card.Root>
  );
}`;
  }
};

export async function POST(request: Request) {
  try {
    const { prompt, library, currentCode } = await request.json();

    if (!prompt || !library) {
      return NextResponse.json(
        { error: 'Prompt and library are required' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Get the model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Generate content
    const promptGenerator = LIBRARY_PROMPTS[library as keyof typeof LIBRARY_PROMPTS];
    if (!promptGenerator) {
      return NextResponse.json(
        { error: 'Invalid library specified' },
        { status: 400 }
      );
    }

    const systemPrompt = promptGenerator(prompt, currentCode);
    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    let generatedCode = response.text();

    // Clean up the response - remove markdown code blocks if present
    generatedCode = generatedCode
      .replace(/```typescript\n?/g, '')
      .replace(/```tsx\n?/g, '')
      .replace(/```javascript\n?/g, '')
      .replace(/```jsx\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    return NextResponse.json({ code: generatedCode });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate code',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined
      },
      { status: 500 }
    );
  }
}
