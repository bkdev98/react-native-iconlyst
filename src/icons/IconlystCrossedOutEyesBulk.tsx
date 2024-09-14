import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossedOutEyesBulk = ({
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
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.962 10.37a.75.75 0 0 1-1.061 0l-.484-.485-.48.481a.75.75 0 0 1-1.061-1.06l.481-.48-.482-.483a.75.75 0 1 1 1.061-1.06l.481.481.482-.48a.749.749 0 1 1 1.06 1.06l-.48.481.483.483a.75.75 0 0 1 0 1.061M9.101 10.366a.75.75 0 0 1-1.06-1.06l.48-.48-.482-.483A.75.75 0 1 1 9.1 7.283l.481.481.482-.48a.749.749 0 1 1 1.06 1.06l-.48.481.483.483a.75.75 0 0 1-1.06 1.061l-.485-.484zM12.5 17.806a2.507 2.507 0 0 0 2.504-2.504v-.746a2.506 2.506 0 0 0-2.504-2.503 2.506 2.506 0 0 0-2.503 2.503v.746a2.507 2.507 0 0 0 2.503 2.504m-1.003-3.25a1.004 1.004 0 0 1 2.007 0v.747a1.004 1.004 0 0 1-2.007 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossedOutEyesBulk;
