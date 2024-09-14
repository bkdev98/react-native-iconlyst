import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudyTwoTone = ({
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
      d="M13.145 19.39a7.985 7.985 0 0 0 7.97-7.336c-2.42.546-5.239-.507-6.866-2.135-1.626-1.626-2.242-4.235-1.747-6.47-5.093.418-8.838 5.606-6.726 11.105"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.47 15.813c-1.303.011-2.356.887-2.356 2.376 0 .965.575 1.795 1.4 2.168.346.14.692.194.954.194h5.623c.263 0 .61-.05.96-.192a2.38 2.38 0 0 0 1.398-2.17c0-1.49-1.052-2.365-2.355-2.376 0-.938-.736-2.813-2.812-2.813S5.47 14.875 5.47 15.813"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoonCloudyTwoTone;
