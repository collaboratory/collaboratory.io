import React, { Fragment } from "react";
import { Tag, Divider, ExternalLink } from "./components/Console";

const Commands = {
	projects: {
		description: "Check out some of our projects",
		run: () => {
			return (
				<Fragment>
					<Divider />
						<div><strong><em>Our Projects</em></strong></div>
						<Divider />
						<div><ExternalLink href="https://github.com/collaboratory/emitterware" target="_blank">Emitterware</ExternalLink> - Opinionated JavaScript framework and server tooling.</div>
						<div><ExternalLink href="https://github.com/collaboratory/qevin" target="_blank">Qevin</ExternalLink> - Performant and atomic backend process management with dashboard.</div>
						<div><ExternalLink href="https://github.com/collaboratory/sandbag" target="_blank">Sandbag</ExternalLink> - The opposite of underscoring. No dash is best dash.</div>
						<div><ExternalLink href="http://calc.collaboratory.io/" target="_blank">Sratchpad Calculator</ExternalLink> - An interactive calculator and data analysis tool.</div>
					<Divider />
				</Fragment>
			);
		}
	},
	clients: {
		description: "Check out some of our clients",
		run: () => {
			return (
				<Fragment>
					<Divider />
						<div><strong><em>Our Clients</em></strong></div>
						<Divider />
						<div><ExternalLink href="https://www.cybermark.com/" target="_blank">Cybermark International</ExternalLink></div>
						<div><ExternalLink href="https://www.imaginarytrout.com/" target="_blank">Imaginary Trout</ExternalLink></div>
						<div><ExternalLink href="https://www.ravellomedia.com/" target="_blank">Ravello Media</ExternalLink></div>
					<Divider />
				</Fragment>
			);
		}
	},
	contact: {
		description: "Get some contact info",
		run: () => {
			return (
				<Fragment>
					<Divider />
						<ExternalLink href="mailto:contact@collaboratory.io" target="_blank">Contact Us</ExternalLink> to learn more about what we do and how.
					<Divider />
				</Fragment>
			);
		}
	},
	github: {
		description: "Check us out on Github.",
		run: () => <Fragment><Divider /><ExternalLink href={`https://github.com/collaboratory`} target="_blank">Check us out on GitHub!</ExternalLink><Divider/></Fragment>
	},
	whoami: {
		description: "About the author",
		showHelpText: false,
		run: () => (
			<Fragment>
				<Divider />
				<div><strong><em>I'm Drew!</em></strong></div>
				I'm the founder of <ExternalLink href="https://github.com/collaboratory" color="purple">@collaboratory</ExternalLink> {" "}
				and the author of <ExternalLink href="https://github.com/emitterware" color="orange">@emitterware</ExternalLink>
				<Divider/>
				<ExternalLink href={`https://github.com/aewing`} target="_blank">Check me out on GitHub!</ExternalLink>
				<Divider/>
			</Fragment>
		)
	},
};

Commands.help = {
	description: "This help text",
	run: (params) => {
		return [
			<Divider />,
			<div><Tag color="orange">Available commands</Tag></div>,
			...Object.entries(Commands).map(
				([name, command]) => command.showHelpText !== false && (
					<div><Tag color="green">{name}</Tag> - <Tag color="gray">{command.description}</Tag></div>
				)
			),
			<Divider />
		];
	}
};

export default Commands;