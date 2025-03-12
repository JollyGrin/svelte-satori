export const prerender = true;

import { read } from '$app/server';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sourceSerifPro from '$lib/fonts/SourceSerifPro-Regular.ttf';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	const width = 1200;
	const height = 600;
	const fontData = await read(sourceSerifPro).arrayBuffer();
	
	// Hardcoded ticket details
	const eventName = 'Onion DAO';
	const eventDate = 'June • July 2025';
	const eventLocation = 'Chicago, IL, USA';
	const attendeeName = 'Guest User';
	const attendeeUsername = '/username';
	const ticketNumber = 'TKT-12345';
	
	// Colors
	const bgColor = '#0a0a16'; // Dark blue-black background
	const primaryColor = '#00ff41'; // Matrix green
	
	// Define the HTML directly - ensuring all divs have display: flex
	const html = {
		type: 'div',
		props: {
			style: {
				display: 'flex',
				flexDirection: 'column',
				width: `${width}px`,
				height: `${height}px`,
				backgroundColor: bgColor,
				color: 'white',
				fontFamily: 'Source Serif Pro, monospace',
				position: 'relative',
				overflow: 'hidden'
			},
			children: [
				// Content container
				{
					type: 'div',
					props: {
						style: {
							display: 'flex',
							padding: '30px',
							zIndex: '1',
							height: '100%'
						},
						children: [
							// Left column
							{
								type: 'div',
								props: {
									style: {
										display: 'flex',
										flexDirection: 'column',
										flex: '1'
									},
									children: [
										// Avatar placeholder
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													width: '80px',
													height: '80px',
													marginBottom: '20px',
													backgroundColor: 'rgba(0,0,0,0.3)',
													alignItems: 'center',
													justifyContent: 'center',
													border: `2px solid ${primaryColor}`
												},
												children: [
													{
														type: 'div',
														props: {
															style: {
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
																width: '100%',
																height: '100%',
																fontSize: '32px',
																fontWeight: 'bold',
																color: 'white'
															},
															children: attendeeName.charAt(0)
														}
													}
												]
											}
										},
										
										// Attendee info
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													flexDirection: 'column'
												},
												children: [
													{
														type: 'h2',
														props: {
															style: {
																margin: '0',
																fontSize: '24px',
																color: primaryColor,
																fontWeight: 'bold'
															},
															children: attendeeName
														}
													},
													{
														type: 'p',
														props: {
															style: {
																margin: '0',
																fontSize: '16px',
																opacity: '0.7'
															},
															children: attendeeUsername
														}
													}
												]
											}
										}
									]
								}
							},
							
							// Right column
							{
								type: 'div',
								props: {
									style: {
										display: 'flex',
										flexDirection: 'column',
										flex: '1',
										alignItems: 'flex-end'
									},
									children: [
										// Event details
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'flex-end',
													marginBottom: '20px'
												},
												children: [
													{
														type: 'h3',
														props: {
															style: {
																margin: '0',
																fontSize: '18px',
																fontWeight: 'bold',
																textTransform: 'uppercase'
															},
															children: eventName
														}
													},
													{
														type: 'p',
														props: {
															style: {
																margin: '0',
																fontSize: '14px',
																opacity: '0.7'
															},
															children: eventDate
														}
													},
													{
														type: 'p',
														props: {
															style: {
																margin: '0',
																fontSize: '14px',
																opacity: '0.7'
															},
															children: eventLocation
														}
													}
												]
											}
										},
										
										// Social icons
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													gap: '8px',
													marginTop: '16px'
												},
												children: [
													{
														type: 'div',
														props: {
															style: {
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
																width: '30px',
																height: '30px',
																border: `1px solid ${primaryColor}`,
																color: primaryColor
															},
															children: '#'
														}
													},
													{
														type: 'div',
														props: {
															style: {
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
																width: '30px',
																height: '30px',
																border: `1px solid ${primaryColor}`,
																color: primaryColor
															},
															children: '○'
														}
													},
													{
														type: 'div',
														props: {
															style: {
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
																width: '30px',
																height: '30px',
																border: `1px solid ${primaryColor}`,
																color: primaryColor
															},
															children: '○'
														}
													}
												]
											}
										}
									]
								}
							}
						]
					}
				},
				
				// Footer line
				{
					type: 'div',
					props: {
						style: {
							height: '2px',
							width: '100%',
							backgroundColor: primaryColor,
							marginTop: 'auto'
						}
					}
				}
			]
		}
	};
	
	// Render with satori
	// @ts-ignore - The html object is compatible with satori but TypeScript doesn't recognize it
	const svg = await satori(html, {
		width,
		height,
		fonts: [
			{
				name: 'Source Serif Pro',
				data: fontData,
				style: 'normal'
			}
		]
	});
	
	// Convert to PNG
	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});
	
	const png = resvg.render();
	
	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
