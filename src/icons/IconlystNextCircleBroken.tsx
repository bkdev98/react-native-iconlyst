import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNextCircleBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.26 10.923a9.3 9.3 0 0 0-2.735-1.733c-.883-.352-1.623.087-1.732.965a17.4 17.4 0 0 0 0 3.692c.12.913.935 1.3 1.732.962a9.1 9.1 0 0 0 2.735-1.733c.681-.623.697-1.507 0-2.154"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.805 9.01v5.98M12.25 21a9 9 0 1 1 3.399-.664"
    />
  </Svg>
);
export default IconlystNextCircleBroken;
