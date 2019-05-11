import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import minimist from "minimist";

const ConsoleContainer = styled.div`
	width: calc(100vw - 40px);
	height: calc(100vh - 40px);
	margin: 10px;
	padding: 10px;
	border-radius: 4px;
	background: #111;
	border-top: 1px solid #555;
	border-left: 1px solid #333;
	border-bottom: 1px solid #444;
	border-right: 1px solid #555;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: auto;
	::-webkit-scrollbar {
		width: 0;
	}
	-ms-overflow-style: none;
`;

const ConsoleHistory = styled.div`
	width: 100%;
	display: flex;
	transition: height 1s ease;
	vertical-align: text-bottom;
`;

const HistoryLines = styled.div`
	width: 100%;
	display: inline-block;
	align-self: flex-end;
`;

const ConsoleInputContainer = styled.div`
	display: flex;
`;

const ConsoleInput = styled.textarea`
	display: block;
	width: calc(100% - 24px);
	margin: 0;
	padding: 4px;
	font-size: 24px;
	background: transparent;
	border-radius: 4px;
	border: none;
	appearance: none;
	outline: none;
	resize: none;
	color: #fff;
	overflow: hidden;
	transition: height 1s ease;
`;

const ConsoleCaret = styled.div`
	&:before {
		left: 0;
		border-style: solid;
		border-width: 2px 2px 0 0;
		content: '';
		display: inline-block;
		height: 10px;
		left: 5px;
		position: relative;
		top: 14px;
		vertical-align: top;
		width: 10px;
		transform: rotate(45deg);
		opacity: 0.5;
	}

	display: inline-block;
	margin-right: 24px;
`;

const PromptContainer = styled.div`
	display: block;
	padding-right: 10px;
`;

export const ExternalLink = styled.a`
	color: ${props => props.color || "#3355aa"};
	text-decoration: underline;
	font-weight: bolder;
`;

export const Tag = styled.span`
	color: ${props => props.color || "white"};
`;

export const Divider = styled.hr`
	border: none;
	border-bottom: 1px solid #333;
`;

const Prompt = () => (
	<PromptContainer>
		<Tag color="green">visitor@collaboratory.io</Tag><Tag color="white">:</Tag><Tag color="blue">~/</Tag>
	</PromptContainer>	
);

const specialKeys = ["Shift", "Control", "Tab", "Alt", "ContextMenu", "Backspace"];

export default ({ commands, theme }) => {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState([
		<Tag color="white">Welcome to <Tag color="#3355aa">collaboratory.io!</Tag></Tag>,
		<Tag color="#fefebe">Use the <Tag color="#55aa22">help</Tag> command to get started.</Tag>,
		<Divider />
	]);
	const inputRef = useRef(null);
	const containerRef = useRef(null);

	const executeCommand = () => {
		const argv = minimist(input.split(" "));
		setInput("");

		let output;
		const command = argv._.pop();

		if (command === "clear") {
			setHistory([]);
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
			return;
		} else if (commands.hasOwnProperty(command)) {
			output = commands[command].run(argv);
		} else {
			output = `${command}: command not found`;
		}

		setHistory([
			...(history.length > 98 ? history.splice(history.length - 98, history.length) : history), 
			<Prompt />, 
			<div><ConsoleCaret />{input}</div>, 
			output
		]);

		containerRef.current.scrollTop = containerRef.current.scrollHeight;
	};

	const onKeyDown = e => {
		if (e.key === "ContextMenu") {
			return false;
		} else if (e.key === "Enter") {
			executeCommand();
			e.preventDefault();
			return false;
		}
	};

	const onKeyUp = e => {
		inputRef.current.style.height = `${inputRef.current.scrollHeight - 8}px`;
	};

	const onMouseUp = e => {
		inputRef.current.focus();
		return false;
	};

	const onInputChange = e => {
		setInput(e.target.value);
	};

	useEffect(() => {
		inputRef.current.focus();
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("keyup", onKeyUp);
		document.addEventListener("mouseup", onMouseUp);
		return () => {
			document.removeEventListener("keyup", onKeyUp);
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("mouseup", onMouseUp);
		};
	});

	return (
		<ConsoleContainer ref={containerRef}>
			<ConsoleHistory>
				<HistoryLines>
					{history.map((line, i) => (<div key={i}>{line}</div>))}
				</HistoryLines>
			</ConsoleHistory>
			<Prompt />
			<ConsoleInputContainer>
				<ConsoleCaret />
				<ConsoleInput 
					tabindex={0} ref={inputRef} 
					value={input} onChange={onInputChange} 
					rows={1} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" 
				/>
			</ConsoleInputContainer>
		</ConsoleContainer>
	);
};