export const prerender = true;

import { read } from '$app/server';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sourceSerifPro from '$lib/fonts/SourceSerifPro-Regular.ttf';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	const width = 1200;
	const height = 630;
	const fontData = await read(sourceSerifPro).arrayBuffer();

	// Ticket details for our conference ticket
	const eventName = 'Developer Conference 2025';
	const eventDate = 'June 15-17, 2025';
	const eventLocation = 'San Francisco, CA';
	const attendeeName = 'John Developer';
	const ticketNumber = 'CONF-12345';

	// Colors
	const bgColor = '#111827';
	const primaryColor = '#22D3EE';
	const secondaryColor = '#F472B6';
	const textColor = '#FFFFFF';

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
				color: textColor,
				fontFamily: 'Source Serif Pro, system-ui, sans-serif',
				position: 'relative'
			},
			children: [
				// Background gradient
				{
					type: 'div',
					props: {
						style: {
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							display: 'flex',
							background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(244, 114, 182, 0.1))',
							zIndex: 1
						}
					}
				},
				
				// Background grid
				{
					type: 'div',
					props: {
						style: {
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							display: 'flex',
							backgroundImage: `radial-gradient(${primaryColor} 1px, transparent 1px)`,
							backgroundSize: '30px 30px',
							opacity: 0.2,
							zIndex: 2
						}
					}
				},
				
				// Content container
				{
					type: 'div',
					props: {
						style: {
							display: 'flex',
							flexDirection: 'column',
							padding: '60px',
							position: 'relative',
							zIndex: 10,
							width: '100%',
							height: '100%',
							boxSizing: 'border-box'
						},
						children: [
							// Header
							{
								type: 'div',
								props: {
									style: {
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '50px'
									},
									children: [
										// Event info
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													flexDirection: 'column'
												},
												children: [
													{
														type: 'div',
														props: {
															style: {
																fontSize: '48px',
																fontWeight: 'bold',
																marginBottom: '10px',
																color: primaryColor,
																display: 'flex'
															},
															children: eventName
														}
													},
													{
														type: 'div',
														props: {
															style: {
																fontSize: '24px',
																color: textColor,
																opacity: 0.8,
																display: 'flex'
															},
															children: `${eventDate} | ${eventLocation}`
														}
													}
												]
											}
										},
										
										// Ticket circle
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													backgroundColor: secondaryColor,
													width: '120px',
													height: '120px',
													borderRadius: '60px'
												},
												children: [
													{
														type: 'div',
														props: {
															style: {
																fontSize: '24px',
																fontWeight: 'bold',
																color: bgColor,
																display: 'flex'
															},
															children: 'TICKET'
														}
													}
												]
											}
										}
									]
								}
							},
							
							// Main content
							{
								type: 'div',
								props: {
									style: {
										display: 'flex',
										flex: 1,
										border: `2px dashed ${primaryColor}`,
										padding: '40px',
										borderRadius: '10px'
									},
									children: [
										// Left side - Attendee info
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'center',
													flex: 1
												},
												children: [
													// Attendee name section
													{
														type: 'div',
														props: {
															style: {
																display: 'flex',
																flexDirection: 'column',
																marginBottom: '40px'
															},
															children: [
																{
																	type: 'div',
																	props: {
																		style: {
																			fontSize: '18px',
																			color: primaryColor,
																			marginBottom: '5px',
																			display: 'flex'
																		},
																		children: 'ATTENDEE'
																	}
																},
																{
																	type: 'div',
																	props: {
																		style: {
																			fontSize: '36px',
																			fontWeight: 'bold',
																			display: 'flex'
																		},
																		children: attendeeName
																	}
																}
															]
														}
													},
													
													// Ticket number section
													{
														type: 'div',
														props: {
															style: {
																display: 'flex',
																flexDirection: 'column'
															},
															children: [
																{
																	type: 'div',
																	props: {
																		style: {
																			fontSize: '18px',
																			color: primaryColor,
																			marginBottom: '5px',
																			display: 'flex'
																		},
																		children: 'TICKET NUMBER'
																	}
																},
																{
																	type: 'div',
																	props: {
																		style: {
																			fontSize: '36px',
																			fontWeight: 'bold',
																			display: 'flex'
																		},
																		children: ticketNumber
																	}
																}
															]
														}
													}
												]
											}
										},
										
										// Barcode-like visual
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'center',
													justifyContent: 'center',
													width: '200px'
												},
												children: [
													{
														type: 'div',
														props: {
															style: {
																display: 'flex',
																width: '160px',
																height: '160px'
															},
															children: [
																{
																	type: 'div',
																	props: {
																		style: {
																			display: 'flex',
																			width: '100%',
																			height: '100%',
																			flexWrap: 'wrap'
																		},
																		children: Array(16).fill(null).map((_, i) => ({
																			type: 'div',
																			props: {
																				style: {
																					width: '40px',
																					height: '40px',
																					backgroundColor: i % 3 === 0 ? primaryColor : i % 2 === 0 ? secondaryColor : 'transparent',
																					display: 'flex'
																				}
																			}
																		}))
																	}
																}
															]
														}
													},
													{
														type: 'div',
														props: {
															style: {
																marginTop: '15px',
																fontSize: '16px',
																opacity: 0.7,
																display: 'flex'
															},
															children: 'SCAN TO CHECK IN'
														}
													}
												]
											}
										}
									]
								}
							},
							
							// Footer
							{
								type: 'div',
								props: {
									style: {
										display: 'flex',
										justifyContent: 'space-between',
										marginTop: '40px',
										alignItems: 'center'
									},
									children: [
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													fontSize: '16px',
													opacity: 0.6
												},
												children: 'Powered by SvelteKit & Satori'
											}
										},
										{
											type: 'div',
											props: {
												style: {
													display: 'flex',
													fontSize: '16px',
													opacity: 0.6
												},
												children: 'Seed: prerender'
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
	};

	const svg = await satori(html, {
		width,
		height,
		fonts: [
			{
				name: 'Source Serif Pro',
				data: fontData,
				weight: 400,
				style: 'normal'
			}
		]
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const png = resvg.render();
	const pngBuffer = png.asPng();

	return new Response(pngBuffer, {
		headers: {
			'content-type': 'image/png',
			'cache-control': 'public, max-age=600' // 10 minutes
		}
	});
};
