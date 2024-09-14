import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordUserBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.642 11.097c0 1.765-1.099 3.012-2.866 3.012H9.724c-1.766 0-2.864-1.247-2.864-3.012v-4.76c0-1.764 1.103-3.01 2.864-3.01h5.053c1.766 0 2.865 1.246 2.865 3.01V8.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.448 14.053v-.492c0-.913.723-2.055 2.8-2.055 2.08 0 2.804 1.13 2.804 2.045v.502M10.46 7.685a1.79 1.79 0 0 0 3.579 0c0-.989-.801-1.789-1.789-1.789M3.76 18.494l2.83 2.83m-2.83 0 2.83-2.83M17.91 18.494l2.83 2.83m-2.83 0 2.83-2.83M10.835 18.494l2.83 2.83m-2.83 0 2.83-2.83"
    />
  </Svg>
);
export default IconlystPasswordUserBroken;
