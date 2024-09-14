import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.087 19.898v-1.723c5.118-.304 4.461-3.96 3.206-4.602 2.279-2.169.772-4.128 0-4.905a5 5 0 0 0-.55-1.109c-.372-.548-.92-1.065-1.729-1.304M15.252 19.93l-1.197-2.83c-.547.15-1.792.154-2.394-1.013-1.275 1.236-3.9.781-3.997-1.393"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.962 14.004c.934.924 2.504 1.198 3.438.82.969-.392 1.68-1.298 1.796-2.12M6.986 5.545c.768-.452 2.081-1.254 3.77-1.47M17.474 7.818c1.912-2.515-2.51-5.677-4.873-2.152"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.277 11.383c-3.901-.994-1.236-7.724 3.456-5.291M7.779 9.114c.482.79 3.09.912 3.09-1.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.231 9.298c.213.48.916 1.37 2.028 1.095M17.82 11.322l1.294-.283M14.846 9.699c.496.432 1.255 1.569.406 3.304"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.26 13.776c.907-1.42 4.73-1.359 4.866 1.804"
    />
  </Svg>
);
export default IconlystBrainBroken;
