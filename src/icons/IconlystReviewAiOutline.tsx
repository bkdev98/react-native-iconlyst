import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReviewAiOutline = ({
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
      d="M8.535 13.347a.75.75 0 0 1 1.005.34c.35.708 1.195 1.264 2.241 1.264s1.89-.556 2.24-1.265a.75.75 0 0 1 1.345.666c-.628 1.268-2.025 2.099-3.585 2.099s-2.958-.831-3.586-2.1a.75.75 0 0 1 .34-1.004"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75a.75.75 0 0 1 0 1.5 8.25 8.25 0 0 0-7.412 11.878l.003.005c.35.73.34 1.468.236 2.11-.066.407-.19.856-.295 1.242-.05.178-.094.343-.128.483l-.002.007q-.002.002.002.02a.2.2 0 0 0 .04.06.2.2 0 0 0 .062.04q.018.006.02.003.202-.052.45-.122c.395-.11.854-.238 1.281-.307.645-.104 1.381-.11 2.11.24l.006.003A8.2 8.2 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12a8.2 8.2 0 0 0-.539-2.94.75.75 0 1 1 1.402-.535A9.7 9.7 0 0 1 21.75 12c0 5.385-4.365 9.75-9.75 9.75a9.7 9.7 0 0 1-4.285-.99c-.347-.166-.737-.187-1.22-.11a9 9 0 0 0-1.008.242c-.185.052-.38.107-.595.16-.596.151-1.153-.08-1.508-.435s-.586-.91-.437-1.505c.057-.236.115-.446.17-.644.092-.332.175-.631.23-.965.078-.484.058-.873-.107-1.218A9.7 9.7 0 0 1 2.25 12M19.824 2.25a.75.75 0 0 1 .717.532c.1.326.354.58.678.679a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .717-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReviewAiOutline;
