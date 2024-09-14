import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDisasterTwoTone = ({
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
      d="M15.778 7.418C12.45 5.671 4.962 6.165 4.255 9.361c-.24 1.615 1.705 2.863 4.164 3.208.86.12 1.766.165 2.669.147"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.92 17.17c-1.324.081-2.768.014-4.067-.26-2.007-.424-3.54-1.562-3.25-2.88.223-.76.915-1.297 1.847-1.634M9.505 21c-1.52-.36-2.673-1.36-2.442-2.538.177-.68.707-1.165 1.418-1.474"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.3 16.307h-1.603a.26.26 0 0 1-.256-.214l-.946-5.201a.26.26 0 0 1 .256-.307h3.505a.26.26 0 0 1 .25.332l-.85 2.978a.26.26 0 0 0 .25.331h2.822a.26.26 0 0 1 .22.4l-2.908 4.568c-.14.22-.48.12-.48-.14v-2.487a.26.26 0 0 0-.26-.26M14.187 20.961l.609-1.577"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.263 7.842c0-2.674-4.06-4.842-9.07-4.842-3.427 0-6.41 1.014-7.953 2.511"
    />
  </Svg>
);
export default IconlystDisasterTwoTone;
