import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLampOutline = ({
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
      d="m11.67 4.315-1.66 3.312v.002a1.87 1.87 0 0 1-1.407 1.007h-.001l-3.72.536a.35.35 0 0 0-.198.598l2.687 2.578h.001a1.84 1.84 0 0 1 .541 1.647l-.634 3.639a.365.365 0 0 0 .53.376l.019-.01 2.868-1.426a.75.75 0 0 1 1.066.838l-.84 3.703h2.157l-.834-3.71a.75.75 0 0 1 1.067-.835L16.175 18l.016.008a.365.365 0 0 0 .533-.377l-.635-3.634a1.84 1.84 0 0 1 .543-1.65l2.682-2.578a.35.35 0 0 0-.196-.598l-.009-.001-3.71-.534h-.002a1.87 1.87 0 0 1-1.406-1.01l-1.658-3.311a.37.37 0 0 0-.157-.156l-.001-.001a.375.375 0 0 0-.505.157m1.194-1.49a1.875 1.875 0 0 0-2.528.803L8.671 6.952a.37.37 0 0 1-.278.199H8.39l-3.71.535a1.85 1.85 0 0 0-1.037 3.164h.002l2.689 2.581.001.002a.34.34 0 0 1 .1.304L5.8 17.381l-.001.008c-.066.403.003.813.192 1.17v.003a1.865 1.865 0 0 0 2.512.778l1.446-.72-.558 2.46a1.25 1.25 0 0 0 1.217 1.535h2.784c.805 0 1.4-.75 1.217-1.533l-.554-2.464 1.443.72a1.865 1.865 0 0 0 2.706-1.949l-.637-3.652v-.001a.34.34 0 0 1 .1-.304l2.689-2.583a1.85 1.85 0 0 0-1.037-3.164l-3.71-.535h-.002a.37.37 0 0 1-.276-.197l-1.66-3.316-.004-.009a1.87 1.87 0 0 0-.803-.802"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarLampOutline;
