CREATE TABLE `recipes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`last_date_made` text
);
--> statement-breakpoint
CREATE TABLE `recipes_to_weeks` (
	`recipes_id` integer NOT NULL,
	`weeks_id` integer NOT NULL,
	FOREIGN KEY (`recipes_id`) REFERENCES `recipes`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`weeks_id`) REFERENCES `weeks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `weeks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`last_date_made` text DEFAULT CURRENT_DATE,
	`date_of_month` text
);
