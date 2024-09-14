import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelebrationOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.305 5.766a.75.75 0 0 1 .394.985l-2.091 4.893a.75.75 0 0 1-1.352.057L15.11 7.666a.75.75 0 0 1 1.324-.704l1.41 2.651 1.476-3.452a.75.75 0 0 1 .985-.395"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.292 4.314a.75.75 0 0 1 1.02-.29C6.24 5.658 13.896 8.186 20.966 5.29a.75.75 0 0 1 .568 1.388C13.876 9.814 5.72 7.085 2.582 5.335a.75.75 0 0 1-.29-1.02"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.013 4.781a.75.75 0 0 1 .94.493L5.977 8.56l1.36-2.24a.75.75 0 1 1 1.283.778l-2.223 3.66a.75.75 0 0 1-1.357-.166L3.521 5.72a.75.75 0 0 1 .492-.939M9.354 6.57a.75.75 0 0 1 .995.367l1.447 3.139 1.944-2.902a.75.75 0 1 1 1.246.835l-2.689 4.013a.75.75 0 0 1-1.304-.104L8.987 7.565a.75.75 0 0 1 .367-.995M3.374 14.706a.75.75 0 0 0-.412.977l2.042 5.029a.75.75 0 0 0 1.352.08l2.31-4.196a.75.75 0 1 0-1.313-.724l-1.552 2.817-1.45-3.57a.75.75 0 0 0-.977-.413"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.708 13.26a.75.75 0 0 0-1.02-.29c-2.928 1.632-10.584 4.16-17.654 1.265a.75.75 0 1 0-.568 1.388c7.658 3.136 15.814.406 18.952-1.344a.75.75 0 0 0 .29-1.02"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.605 13.725a.75.75 0 0 0-.94.493l-1.025 3.287-1.361-2.24a.75.75 0 1 0-1.282.779l2.223 3.66a.75.75 0 0 0 1.357-.167l1.52-4.872a.75.75 0 0 0-.492-.94M14.263 15.516a.75.75 0 0 0-.996.367l-1.446 3.138-1.944-2.901a.75.75 0 1 0-1.246.835l2.688 4.012a.75.75 0 0 0 1.304-.103l2.007-4.353a.75.75 0 0 0-.368-.995"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelebrationOutline;
