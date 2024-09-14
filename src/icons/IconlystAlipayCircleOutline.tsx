import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlipayCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.734 5.71a.75.75 0 0 1 .75.75V7.6h3.03a.75.75 0 0 1 0 1.5h-3.03v1.613a.75.75 0 0 1-1.5 0V9.101H8.332a.75.75 0 1 1 0-1.5h2.652V6.46a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.15 10.71a.75.75 0 0 1 .75-.75h6.047a.75.75 0 0 1 .743.856 12.3 12.3 0 0 1-.773 2.78l5.11 2.336a.75.75 0 1 1-.624 1.364l-5.157-2.358c-.832 1.368-2.171 2.665-4.213 2.665-1.577 0-3.112-1.043-3.112-2.64 0-1.032.672-1.857 1.54-2.284.91-.448 1.899-.381 2.662-.29.832.1 1.647.31 2.42.602a11 11 0 0 0 .492-1.53H8.899a.75.75 0 0 1-.75-.75m4.704 3.625a9 9 0 0 0-1.91-.456c-.74-.09-1.336-.092-1.82.146-.487.24-.703.611-.703.938 0 .482.544 1.14 1.612 1.14 1.23 0 2.14-.72 2.82-1.768"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlipayCircleOutline;
