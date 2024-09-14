import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperFailBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M13.252 2c.248 0 .456.21.456.46v3.22c0 1.83 1.495 3.33 3.307 3.34.742 0 1.346.01 1.792.01.307 0 .822-.01 1.238-.01.257 0 .455.2.455.45v8.04c0 2.48-1.99 4.49-4.455 4.49H8.173C5.59 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.965 2Zm-2.663 8.72a.713.713 0 0 0-1.04 0 .75.75 0 0 0 0 1.05l1.208 1.22-1.207 1.22a.75.75 0 0 0 0 1.05c.138.15.326.22.514.22s.386-.07.525-.22l1.208-1.22 1.208 1.22a.73.73 0 0 0 .525.22.73.73 0 0 0 .524-.22.75.75 0 0 0 0-1.05l-1.207-1.22 1.207-1.22a.75.75 0 0 0 0-1.05.724.724 0 0 0-1.049 0l-1.208 1.22Zm4.557-7.814c0-.43.518-.645.813-.334l3.987 4.187a.477.477 0 0 1-.34.807c-.814.003-1.773 0-2.463-.007-1.095 0-1.997-.91-1.997-2.017Z"
    />
  </Svg>
);
export default IconlystPaperFailBold;
