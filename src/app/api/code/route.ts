import { NextResponse } from 'next/server';

const CODE_SNIPPETS = {
    card: {
        shadcn: `import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Design Systems</CardTitle>
        <CardDescription>A practical talk on component APIs.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}`,
        mui: `import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';

export default function CardDemo() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardHeader title="Design Systems" subheader="September 14, 2026" />
      <CardMedia component="img" height="194" image="/image.jpg" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          A practical talk on component APIs.
        </Typography>
      </CardContent>
    </Card>
  );
}`,
        antd: `import { Card } from 'antd';
const { Meta } = Card;

export default function CardDemo() {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="/image.jpg" />}
    >
      <Meta title="Design Systems" description="A practical talk on component APIs." />
    </Card>
  );
}`,
        chakra: `import { Card, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';

export default function CardDemo() {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src="/image.jpg" />
      <Card.Body>
        <Heading size="md">Design Systems</Heading>
        <Text>A practical talk on component APIs.</Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="solid">View Event</Button>
      </Card.Footer>
    </Card.Root>
  );
}`
    },
    button: {
        shadcn: `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button size="sm">Button</Button>;
}`,
        mui: `import { Button } from '@mui/material';

export default function ButtonDemo() {
  return <Button variant="contained" size="small">Button</Button>;
}`,
        antd: `import { Button } from 'antd';

export default function ButtonDemo() {
  return <Button type="primary" size="small">Button</Button>;
}`,
        chakra: `import { Button } from '@chakra-ui/react';

export default function ButtonDemo() {
  return <Button size="sm">Button</Button>;
}`
    },
    input: {
        shadcn: `import { Input } from "@/components/ui/input";

export default function InputDemo() {
  return <Input placeholder="Type here..." />;
}`,
        mui: `import { Input } from '@mui/material';

export default function InputDemo() {
  return <Input placeholder="Type here..." fullWidth />;
}`,
        antd: `import { Input } from 'antd';

export default function InputDemo() {
  return <Input placeholder="Type here..." />;
}`,
        chakra: `import { Input } from '@chakra-ui/react';

export default function InputDemo() {
  return <Input placeholder="Type here..." />;
}`
    },
    avatar: {
        shadcn: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="/image.jpg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`,
        mui: `import { Avatar } from '@mui/material';

export default function AvatarDemo() {
  return <Avatar src="/image.jpg" />;
}`,
        antd: `import { Avatar } from 'antd';

export default function AvatarDemo() {
  return <Avatar src="/image.jpg" />;
}`,
        chakra: `import { Avatar } from '@chakra-ui/react';

export default function AvatarDemo() {
  return <Avatar src="/image.jpg" name="User" />;
}`
    },
    switch: {
        shadcn: `import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
  return <Switch />;
}`,
        mui: `import { Switch } from '@mui/material';

export default function SwitchDemo() {
  return <Switch defaultChecked size="small" />;
}`,
        antd: `import { Switch } from 'antd';

export default function SwitchDemo() {
  return <Switch defaultChecked size="small" />;
}`,
        chakra: `import { Switch } from '@chakra-ui/react';

export default function SwitchDemo() {
  return <Switch defaultChecked size="sm" />;
}`
    },
    alert: {
        shadcn: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>System notification</AlertDescription>
    </Alert>
  );
}`,
        mui: `import { Alert } from '@mui/material';

export default function AlertDemo() {
  return <Alert severity="info">System notification</Alert>;
}`,
        antd: `import { Alert } from 'antd';

export default function AlertDemo() {
  return <Alert message="System notification" type="info" />;
}`,
        chakra: `import { Alert } from '@chakra-ui/react';

export default function AlertDemo() {
  return <Alert status="info">System notification</Alert>;
}`
    },
    checkbox: {
        shadcn: `import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Agree to terms</label>
    </div>
  );
}`,
        mui: `import { Checkbox } from '@mui/material';

export default function CheckboxDemo() {
  return <Checkbox defaultChecked size="small" />;
}`,
        antd: `import { Checkbox } from 'antd';

export default function CheckboxDemo() {
  return <Checkbox defaultChecked>Accept</Checkbox>;
}`,
        chakra: `import { Checkbox } from '@chakra-ui/react';

export default function CheckboxDemo() {
  return <Checkbox defaultChecked>Accept</Checkbox>;
}`
    }
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const component = searchParams.get('component') as keyof typeof CODE_SNIPPETS;

    if (!component || !CODE_SNIPPETS[component]) {
        return NextResponse.json({ error: 'Component code not found' }, { status: 404 });
    }

    return NextResponse.json(CODE_SNIPPETS[component]);
}
