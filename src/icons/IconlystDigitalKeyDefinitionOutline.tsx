import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDigitalKeyDefinitionOutline = ({
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
      d="M4.955 12.901a4.114 4.114 0 1 1 6.742-1.412.75.75 0 0 0 .17.803l.847.846v1.302c0 .374.276.69.646.742l1.257.177.037 1.046a.75.75 0 0 0 .665.719l1.213.137v1.4h-1.76l-4.655-4.65a.75.75 0 0 0-.795-.172 4.12 4.12 0 0 1-4.367-.938m-1.06-6.878a5.613 5.613 0 0 0 5.488 9.374l4.548 4.545c.14.14.331.22.53.22h2.821a.75.75 0 0 0 .75-.75V16.59a.75.75 0 0 0-.665-.746l-1.237-.14-.037-1.027a.75.75 0 0 0-.645-.716l-1.234-.174v-.962a.75.75 0 0 0-.22-.53l-.739-.737a5.613 5.613 0 0 0-9.361-5.536M16.238 5.55a.75.75 0 0 1 .927-.514 6.33 6.33 0 0 1 4.574 6.448.75.75 0 1 1-1.497-.088 4.83 4.83 0 0 0-3.489-4.918.75.75 0 0 1-.515-.927M15.199 8.581a.75.75 0 0 1 .91-.543 3.5 3.5 0 0 1 2.621 3.68.75.75 0 1 1-1.495-.125 2 2 0 0 0-1.493-2.1.75.75 0 0 1-.543-.912"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.96 8.976a1.003 1.003 0 1 1 2.007 0 1.003 1.003 0 0 1-2.006 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDigitalKeyDefinitionOutline;
