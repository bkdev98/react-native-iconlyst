import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerBold = ({
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
      d="M20.645 15.427c-.924-.003-2.014 0-2.799.008-1.244 0-2.268 1.035-2.268 2.291v2.995c0 .489.588.732.925.379l2.278-2.393 2.25-2.363a.542.542 0 0 0-.386-.917m.505-1.651a.507.507 0 0 0 .506-.512V7.35c0-2.817-2.261-5.1-5.061-5.1H7.652c-2.924 0-5.308 2.397-5.308 5.35v9.027c0 2.817 2.272 5.123 5.072 5.123h6.006a.52.52 0 0 0 .518-.523V17.57c0-2.079 1.699-3.783 3.757-3.794z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerBold;
