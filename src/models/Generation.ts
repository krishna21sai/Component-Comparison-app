import mongoose, { Schema, Document } from 'mongoose';

export interface IGeneration extends Document {
    prompt: string;
    library: string;
    code: string;
    currentCode?: string;
    createdAt: Date;
}

const GenerationSchema: Schema = new Schema({
    prompt: { type: String, required: true },
    library: { type: String, required: true },
    code: { type: String, required: true },
    currentCode: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Generation || mongoose.model<IGeneration>('Generation', GenerationSchema);
