import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
/**
 * Internal dependencies
 */
import Edit from "./edit";
// import save from "./save";
import metadata from "./block.json";
import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";
import { Spinner } from "@wordpress/components";
import { client } from "../main";

registerBlockType(metadata.name, {
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<Spinner />}>
				<Edit {...props} />
			</Suspense>
		</ApolloProvider>
	),
	// save,
	// attributes____: {
	// 	gridClass: {
	// 		type: "string",
	// 		default:
	// 			"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
	// 	},
	// 	gridClassCustom: { type: "string", default: "" },
	// 	sectionId: { type: "string", default: "gutenberg_section_term_grid" },
	// 	...BLOCK_TERM_ATTRIBUTES_COMMON,
	// },
});
