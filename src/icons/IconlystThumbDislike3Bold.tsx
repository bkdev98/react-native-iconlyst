import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike3Bold = ({
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
      d="M2.752 12.719c.24.472.629.86 1.09 1.09.524.263 1.164.263 2.464.263h1.878a.43.43 0 0 1 .405.558c-.702 2.275-.756 4.025-.154 5.083.304.545.776.891 1.363 1.006.388.084.88.158 1.269.011.598-.23.723-.807.828-1.269.344-1.552 1.278-3.667 2.688-4.66a.5.5 0 0 0 .202-.516c-.111-.525-.111-1.123-.111-1.933V6.281c0-.745 0-1.31.08-1.8a.46.46 0 0 0-.262-.502l-1.14-.477c-.283-.115-.419-.178-.566-.22a4 4 0 0 0-.419-.084c-.157-.01-.304-.01-.608-.01H7.145c-.681 0-1.017 0-1.342.083-.304.074-.598.21-.85.388-.282.19-.513.462-.943.965l-.514.587c-.356.42-.535.619-.67.87-.127.22-.221.472-.274.724-.052.273-.052.556-.052 1.112v2.338c0 1.3 0 1.94.252 2.464M19.025 5.002c.44 0 .787.346.787.786v.01a.785.785 0 1 1-1.573 0c0-.43.357-.796.786-.796m-2.58 9.31c.18.368.483.661.84.85.398.2.922.2 1.971.2h.241c.692 0 1.038 0 1.31-.137.242-.126.441-.325.557-.566.136-.262.136-.608.136-1.31V5.273c0-.692 0-1.048-.136-1.31a1.26 1.26 0 0 0-.556-.567c-.273-.126-.619-.126-1.31-.126h-.242c-1.049 0-1.573 0-1.971.19-.357.188-.66.482-.84.849a1.6 1.6 0 0 0-.135.43c-.063.356-.063.828-.063 1.54v6.072c0 .88 0 1.384.125 1.762.021.073.043.136.074.199"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbDislike3Bold;