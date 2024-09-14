import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsBold = ({
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
      d="M7.703 6.729a.3.3 0 0 0 .3-.3c.002-1.145.012-2.925.017-3.628a.287.287 0 0 0-.3-.293C5.417 2.629 3.6 4.133 3.1 6.384c-.039.18.102.345.286.345zM14.511 2.8a.3.3 0 0 0-.3-.3H9.785a.3.3 0 0 0-.3.3c.005.704.015 2.483.017 3.63a.3.3 0 0 0 .3.299h4.392a.3.3 0 0 0 .3-.3c.002-1.146.013-2.925.017-3.628M15.994 6.43a.3.3 0 0 0 .3.299h4.318a.287.287 0 0 0 .286-.345c-.5-2.253-2.318-3.756-4.621-3.877a.287.287 0 0 0-.3.293c.004.703.015 2.483.017 3.63M14.644 15.725a9.6 9.6 0 0 1-2.857 1.79 2.3 2.3 0 0 1-.854.174c-.335 0-.653-.084-.936-.252-.5-.296-.819-.809-.898-1.446a17 17 0 0 1 0-3.695c.083-.64.42-1.167.928-1.455.524-.3 1.171-.32 1.777-.06a9.5 9.5 0 0 1 2.841 1.785c.475.428.74.989.741 1.573.002.586-.262 1.149-.742 1.586M3.25 8.229a.3.3 0 0 0-.3.3v7.7c0 3.153 2.027 5.27 5.044 5.27h8.013c3.016 0 5.043-2.117 5.043-5.27v-7.7a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.225 12.164a.7.7 0 0 0-.275-.063.36.36 0 0 0-.18.043c-.125.07-.169.22-.183.333a15.6 15.6 0 0 0 .002 3.344c.011.08.05.252.171.325.106.062.276.054.47-.023a8.1 8.1 0 0 0 2.405-1.508c.114-.105.252-.271.251-.472 0-.2-.136-.364-.249-.465a8 8 0 0 0-2.412-1.514"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReelsBold;
