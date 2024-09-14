import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudyLight = ({
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
      d="M15.064 11.297c0-1.313-1.03-3.937-3.937-3.937-1.441 0-2.42.645-3.042 1.455l-.309.445m2.72 2.413c0-.804-.63-2.412-2.411-2.412s-2.412 1.608-2.412 2.412l-.103.007a2.456 2.456 0 1 0 0 4.91m10.183 0a2.7 2.7 0 1 0-1.907-4.61M10.18 7.297a2.797 2.797 0 0 0-5.58-.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.114 8.269a1.475 1.475 0 0 1 2.775-.422M12.76 7.595a4.196 4.196 0 0 1 3.83-3.77c-1.242 3.356 1.242 5.814 4.524 4.521a4.2 4.2 0 0 1-3.277 3.756M12.958 20.175a2.847 2.847 0 1 0-2.732-3.653 1.893 1.893 0 1 0-.698 3.652z"
    />
  </Svg>
);
export default IconlystMoonCloudyLight;
