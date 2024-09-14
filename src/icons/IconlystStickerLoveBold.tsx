import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerLoveBold = ({
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
      d="M20.645 15.427c-.924-.003-2.014 0-2.798.008-1.244 0-2.27 1.035-2.27 2.291v2.994c0 .49.589.733.926.38l2.278-2.393 2.25-2.363a.542.542 0 0 0-.386-.917"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.21 9.79c-.61 1.9-2.92 3.2-3.19 3.35a.74.74 0 0 1-.36.09q-.18 0-.36-.09c-.26-.15-2.59-1.47-3.18-3.35-.49-1.52.23-3.07 1.63-3.52.64-.2 1.32-.15 1.91.13.6-.28 1.28-.33 1.92-.13 1.4.45 2.12 2 1.63 3.52m3.38-7.54H7.65c-2.92 0-5.31 2.4-5.31 5.35v9.03c0 2.81 2.28 5.12 5.08 5.12h6c.3 0 .52-.24.52-.52v-3.66c0-2.08 1.7-3.78 3.76-3.79h3.45c.28 0 .51-.23.51-.52V7.35c0-2.82-2.27-5.1-5.07-5.1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.78 9.33c-.3.94-1.42 1.82-2.11 2.27-.7-.45-1.83-1.34-2.12-2.27-.2-.62-.04-1.41.66-1.63.11-.04.22-.05.33-.05.24 0 .48.07.68.22.26.19.63.19.89 0 .29-.22.67-.28 1.01-.17.7.22.86 1.01.66 1.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerLoveBold;
