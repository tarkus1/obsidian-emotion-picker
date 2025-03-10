import { DEFAULT_EMOTIONS } from "../emotions/index";
import { EmotionSection } from "../emotions/EmotionSection";

export type EmotionPickerLocaleOverride = "en" | string;

export interface EmotionPickerSettings {
	modalHeaderText: string;
	useCommaInSeparator: boolean;
	addAsLink: boolean;
	addAsTag: boolean;
	capitalize: boolean;
	emotions: EmotionSection[];
	locale: EmotionPickerLocaleOverride;
}

export class DefaultSettings implements EmotionPickerSettings {
	modalHeaderText = "Emotion or Attitude?";
	useCommaInSeparator = false;
	addAsLink = false;
	addAsTag = true;
	capitalize = false;
	emotions = DEFAULT_EMOTIONS;
	locale: "en";
}
