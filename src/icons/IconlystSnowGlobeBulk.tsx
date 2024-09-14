import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowGlobeBulk = ({
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
      d="M17.66 20.955c-.03.45-.25.85-.61 1.12-.4.29-.92.29-1.97.29H8.92c-1.04 0-1.57 0-1.96-.29-.37-.27-.59-.67-.62-1.12-.03-.49.26-.93.82-1.81l.043-.067a.5.5 0 0 1 .422-.233h8.75a.5.5 0 0 1 .422.233l.043.067c.57.88.85 1.32.82 1.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M12 2.865c-4.6 0-8.34 3.74-8.34 8.33a8.29 8.29 0 0 0 3.178 6.55c.085.066.19.1.299.1h9.727a.5.5 0 0 0 .298-.1 8.29 8.29 0 0 0 3.178-6.55c0-4.59-3.74-8.33-8.34-8.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.72 11.315q-.18 0-.36-.09a.753.753 0 0 1-.29-1.02l.46-.83a.747.747 0 1 1 1.31.72l-.46.83c-.13.25-.39.39-.66.39M9.25 13.325l-.56.98c-.14.25-.39.38-.65.38-.13 0-.26-.03-.37-.1a.74.74 0 0 1-.28-1.02l.56-.98a.74.74 0 0 1 1.02-.28c.36.2.49.66.28 1.02M10.3 7.785a.753.753 0 0 1-.29-1.02l.49-.9c.2-.36.66-.49 1.02-.29s.5.65.29 1.02l-.49.89c-.14.25-.39.39-.66.39q-.18 0-.36-.09M12.65 14.985l-.24.44a.76.76 0 0 1-.66.39c-.12 0-.25-.03-.36-.1-.37-.2-.5-.65-.3-1.01l.24-.44c.2-.37.66-.5 1.02-.3s.5.66.3 1.02M12.91 10.885l-.49.91c-.13.25-.39.4-.66.4a.757.757 0 0 1-.66-1.11l.49-.91c.19-.36.65-.5 1.01-.3.37.19.51.65.31 1.01M14.19 8.645a.753.753 0 0 1-.29-1.02l.24-.44c.2-.36.66-.49 1.02-.3.36.2.49.66.29 1.02l-.24.44c-.13.25-.39.39-.65.39-.13 0-.25-.03-.37-.09M16.46 14.295l-.5.91c-.14.25-.39.39-.66.39-.12 0-.24-.03-.36-.1a.74.74 0 0 1-.29-1.01l.5-.91a.747.747 0 1 1 1.31.72M17.62 11.575a.77.77 0 0 1-.66.39c-.12 0-.24-.03-.36-.1a.75.75 0 0 1-.29-1.02l.24-.43a.747.747 0 1 1 1.31.72z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowGlobeBulk;
