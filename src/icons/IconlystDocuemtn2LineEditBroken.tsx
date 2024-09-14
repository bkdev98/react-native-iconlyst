import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemtn2LineEditBroken = ({
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
      d="M10.45 20.723H7.9a4.057 4.057 0 0 1-4.056-4.056v-9.61A4.057 4.057 0 0 1 7.899 3M18.943 10.369V7.056A4.057 4.057 0 0 0 14.886 3h-3.493M19.894 16.903a.995.995 0 0 0-.055-1.405l-.666-.616a.995.995 0 0 0-1.405.054l-3.157 3.446a1.73 1.73 0 0 0-.432.97l-.08.747a.81.81 0 0 0 .94.889l.724-.122c.39-.065.746-.26 1.008-.555l1.367-1.492M13.895 9.543H8.892m2.611 4.369H8.891"
    />
  </Svg>
);
export default IconlystDocuemtn2LineEditBroken;
