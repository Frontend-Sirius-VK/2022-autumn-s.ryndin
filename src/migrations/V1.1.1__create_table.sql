create table question(
	id int generated always as identity primary key,
	stats jsonb,
	title text not null,
	excerp text not null
);
