import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSolarEclipseTwoTone = ({
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
      d="M12.418 2.696v1.418m0 15.772v1.418M4.532 12H3.114m15.883-6.579-1.003 1.003M6.842 17.576 5.84 18.579m13.157 0-1.003-1.003M6.842 6.424 5.84 5.422M16.17 8.768a4.95 4.95 0 1 0-.103 6.58"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.114 13.488c-.906 2.193-3.791 3.078-5.878 1.224a3.24 3.24 0 0 1-1.067-2.107c-.26-2.763 2.13-4.565 4.431-4.024-.524.894-.622 2.104-.147 3.031.474.928 1.542 1.774 2.661 1.876"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSolarEclipseTwoTone;
