import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewCleanOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.98 5.324C4.372 5.977 4 6.937 4 8.134v7.294c0 1.197.372 2.154.98 2.805.602.645 1.494 1.05 2.662 1.05h3.231a.75.75 0 0 1 0 1.5H7.642c-1.537 0-2.841-.544-3.758-1.526-.912-.976-1.384-2.322-1.384-3.83V8.135c0-1.507.472-2.855 1.383-3.833C4.8 3.318 6.104 2.77 7.642 2.77h7.73c1.542 0 2.847.547 3.763 1.532.91.978 1.38 2.326 1.38 3.832v1.938a.75.75 0 0 1-1.5 0V8.134c0-1.198-.37-2.158-.978-2.81-.602-.647-1.493-1.054-2.665-1.054h-7.73c-1.167 0-2.058.406-2.662 1.054"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.502 9.027a.75.75 0 0 1 .75-.75h16.512a.75.75 0 0 1 0 1.5H3.252a.75.75 0 0 1-.75-.75M2.5 14.572a.75.75 0 0 1 .75-.75h8.365a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.294 2.777a.75.75 0 0 1 .75.75v8.365a.75.75 0 1 1-1.5 0V3.527a.75.75 0 0 1 .75-.75m-5.548.005a.75.75 0 0 1 .75.75v16.502a.75.75 0 0 1-1.5 0V3.532a.75.75 0 0 1 .75-.75M18.371 11.68c.547-.018 1.06.202 1.463.606l1.56 1.56c.403.403.625.916.605 1.463-.019.54-.268 1.03-.65 1.411l-3.859 3.858c-.381.382-.871.632-1.41.65-.548.02-1.061-.201-1.465-.605l-1.56-1.56c-.403-.403-.624-.917-.605-1.464.02-.539.27-1.028.651-1.41l3.859-3.859c.382-.381.873-.63 1.411-.65m-.35 1.712-3.86 3.858c-.162.163-.208.308-.211.403-.004.088.025.208.166.35l1.56 1.56c.142.142.263.17.35.167.096-.003.24-.05.404-.212l3.858-3.86c.163-.161.209-.306.212-.402.003-.087-.025-.209-.167-.35l-1.56-1.56c-.14-.14-.261-.17-.35-.166-.095.003-.24.05-.403.212"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.124 14.163a.75.75 0 0 1 1.06 0l3.331 3.33a.75.75 0 0 1-1.06 1.061l-3.331-3.33a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewCleanOutline;
