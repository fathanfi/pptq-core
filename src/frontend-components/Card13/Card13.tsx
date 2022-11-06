import React, { FC } from "react";
import NcImage from "../NcImage/NcImage";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";

const Card13 = ({ className = "", post, isSkeleton = false }) => {
	const { title, link, excerpt, featuredImage, date, postFormats } = post;

	return (
		<div
			className={`nc-Card13 relative flex justify-between ${className}`}
			data-nc-id="Card13"
		>
			<div className="flex flex-1 flex-col md:py-2">
				<h3
					className={`nc-card-title block font-semibold text-sm md:text-base`}
				>
					<a href={link} className="line-clamp-2" title={title}>
						{title}
					</a>
				</h3>
				{excerpt && (
					<span className="hidden md:block my-3 text-sm lg:text-base text-neutral-500 dark:text-neutral-400 ">
						<span
							className="line-clamp-2"
							dangerouslySetInnerHTML={{ __html: excerpt }}
						/>
					</span>
				)}
				<span className="mt-4 block sm:hidden text-xs text-neutral-500 ">
					{date || null}
				</span>
				<div className="mt-auto hidden sm:block">
					<PostCardMeta meta={{ ...post }} />
				</div>
			</div>

			<div
				className={`block relative flex-shrink-0 w-20 sm:w-28 md:w-36 xl:w-48 ml-3 sm:ml-5`}
			>
				<a
					href={link}
					className={`w-full block h-0 aspect-h-1 aspect-w-1 rounded-md sm:rounded-xl overflow-hidden z-0`}
				>
					<NcImage
						containerClassName="absolute inset-0 "
						className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
						src={featuredImage?.node.sourceUrl || "."}
						srcSet={featuredImage?.node.srcSet}
					/>
					<div>
						<PostTypeFeaturedIcon
							className="absolute bottom-2 left-2"
							postType={postFormats?.edges[0]?.node.slug}
							wrapSize="w-8 h-8"
							iconSize="w-4 h-4"
						/>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Card13;