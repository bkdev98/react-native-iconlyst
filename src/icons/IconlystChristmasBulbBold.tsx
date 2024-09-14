import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBulbBold = ({
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
      d="m15.398 14.12-1.104 1.062a.2.2 0 0 0-.062.178l.264 1.5a.713.713 0 0 1-.588.816.7.7 0 0 1-.444-.074l-1.364-.707a.21.21 0 0 0-.198 0l-1.365.709a.706.706 0 0 1-.958-.296c-.074-.136-.1-.294-.074-.448l.261-1.5a.2.2 0 0 0-.057-.178L8.601 14.12a.705.705 0 0 1-.019-.993.7.7 0 0 1 .418-.21l1.523-.22a.21.21 0 0 0 .16-.113l.683-1.365a.72.72 0 0 1 .963-.308c.13.066.234.17.304.302l.686 1.372c.03.06.09.102.158.113l1.527.218a.7.7 0 0 1 .604.79.7.7 0 0 1-.21.414m-.527-6.764v-1.21c0-.827-.673-1.5-1.5-1.5h-.107v-.375c0-.69-.56-1.25-1.276-1.25-.69 0-1.25.56-1.25 1.25v.375h-.105c-.828 0-1.5.673-1.5 1.5v1.21c-2.833 1.14-4.84 3.91-4.84 7.147 0 4.249 3.458 7.706 7.708 7.706 4.249 0 7.705-3.457 7.705-7.706 0-3.235-2.005-6.005-4.834-7.147"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasBulbBold;
