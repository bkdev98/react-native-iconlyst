import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalPhoneBold = ({
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
      d="M14.527 16.525a.286.286 0 0 1-.288.285h-.886a.3.3 0 0 0-.3.3v.881a.293.293 0 0 1-.289.293h-1.53a.29.29 0 0 1-.288-.293v-.881a.3.3 0 0 0-.3-.3H9.76a.286.286 0 0 1-.288-.285v-1.541a.29.29 0 0 1 .288-.285h.887a.3.3 0 0 0 .3-.3v-.881c0-.16.13-.294.288-.294h1.53c.16 0 .29.134.29.294v.881a.3.3 0 0 0 .3.3h.885a.29.29 0 0 1 .288.285zm5.002-3.597a.307.307 0 0 0-.32-.28 10 10 0 0 1-.413.008q-.359-.002-.706-.011c-.269-.007-.562-.015-.878-.015-2.892 0-3.784-2.038-4.165-2.908-.085-.197-.432-.45-.646-.467a5 5 0 0 0-.934.013c-.144.017-.458.32-.516.453-.38.87-1.272 2.909-4.163 2.909-.313 0-.602.008-.868.014-.364.01-.742.017-1.123.001a.31.31 0 0 0-.322.282l-.27 3.606c-.16 1.199.163 2.331.911 3.185.812.929 2.072 1.462 3.454 1.462h6.85c1.451 0 2.805-.592 3.624-1.583a3.63 3.63 0 0 0 .761-3.036z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.498 7.071c.004-.348.015-1.27-.873-2.169-1.366-1.382-4.269-2.082-8.627-2.082-4.357 0-7.259.7-8.624 2.082-.887.897-.876 1.821-.872 2.17l-.002.107c0 1.572.212 2.418.731 2.925.605.59 1.463.568 2.639.54q.423-.012.918-.014c1.583 0 1.997-.949 2.33-1.71.394-.902.734-1.68 2.88-1.68s2.488.778 2.883 1.68c.333.761.748 1.71 2.331 1.71q.502.002.93.015.371.01.699.012c.822 0 1.452-.084 1.928-.548.519-.506.731-1.355.731-2.93 0-.018 0-.089-.002-.108"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalPhoneBold;
