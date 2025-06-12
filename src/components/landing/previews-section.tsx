import { Card, CardContent } from '@/components/ui/card';
import { WordTooltip } from '@/components/shared/word-tooltip';

const previewItems = [
	{
		title: 'Sleek Flashcard UI',
		icon: '📱',
		alt: 'Flashcard UI Preview',
		description:
			'Swipe your way to fluency with our intuitive flashcard system.',
		dataAiHint: 'mobile app interface',
	},
	{
		title: 'Engaging Vocab Builder',
		icon: '🎮',
		alt: 'Vocab Builder Preview',
		description: 'Discover new words in themed decks and track your mastery.',
		dataAiHint: 'language learning game',
	},
	{
		title: 'Hilarious Example Sentences',
		icon: '😂',
		alt: 'Funny Example Sentences Preview',
		description:
			'"Der Kater hat meinen Hausaufgaben gefressen." (The tomcat ate my homework.) - Real-world German you\'ll actually use (maybe).',
		dataAiHint: 'funny text chat',
	},
];

export function PreviewsSection() {
	return (
		<section className="py-16 md:py-24 bg-secondary/30">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-headline font-bold">
						Sneak Peek 👀
					</h2>
					<p className="text-lg text-muted-foreground mt-2">
						Get a load of what's{' '}
						<WordTooltip
							germanWord="drin"
							englishTranslation="inside"
						>
							drin
						</WordTooltip>
						. It's pretty{' '}
						<WordTooltip
							germanWord="toll"
							englishTranslation="great / cool"
						>
							toll
						</WordTooltip>
						.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{previewItems.map((item) => (
						<Card
							key={item.title}
							className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
								<div className="text-center">
									<div className="text-6xl mb-2">{item.icon}</div>
									<div className="text-lg font-semibold">
										{item.title}
									</div>
								</div>
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-headline font-semibold mb-2">
									{item.title}
								</h3>
								<p className="text-muted-foreground text-sm">
									{item.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
