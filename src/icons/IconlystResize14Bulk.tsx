import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize14Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.907 14.13-.001-.004v-.003l-.001-.002v-.002a1.004 1.004 0 0 0-.236-.467h-.001q-.034-.038-.071-.072h-.002a1 1 0 0 0-.275-.179h-.002a1 1 0 0 0-.393-.08h-.002l-4.525.01a1 1 0 0 0 .002 2h.002l2.104-.005-3.214 3.213a1 1 0 0 0 1.414 1.414L8.92 16.74l-.004 2.104a1 1 0 0 0 .998 1.002h.002a1 1 0 0 0 1-.998l.009-4.524v-.01q0-.095-.018-.184"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.707 4.547a1 1 0 0 0-1.414 0l-3.215 3.214.004-2.104c.001-.552-.416-1.038-1-1.002a1 1 0 0 0-1 .998l-.009 4.523v.01q.001.132.034.254l.001.001v.002l.001.002v.002l.001.001a1 1 0 0 0 .22.4q.034.038.073.074a1 1 0 0 0 .664.257h.007l4.526-.009a1 1 0 0 0-.002-2h-.002l-2.103.004 3.214-3.213a1 1 0 0 0 0-1.414"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystResize14Bulk;
