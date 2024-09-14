import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNetflixTwoTone = ({
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
      d="M9.63 13.13v5.98c0 .49-.399.888-.89.888H5.779a.89.89 0 0 1-.89-.889V7.144"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.4 19.637 4.89 6.667V4.889c0-.491.398-.889.889-.889h3.105c.283 0 .549.135.716.363l9.512 12.97v1.778c0 .491-.398.889-.889.889h-3.105a.89.89 0 0 1-.717-.363"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.37 10.869v-5.98c0-.491.398-.889.889-.889h2.963c.49 0 .889.398.889.889v11.965"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNetflixTwoTone;
