import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperDownloadBold = ({
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
      d="M13.252 2c.248 0 .456.21.456.46v3.22c0 1.83 1.485 3.33 3.307 3.34.742 0 1.346.01 1.792.01h.169c.304-.003.714-.01 1.069-.01.257 0 .455.2.455.45v8.04c0 2.48-2 4.49-4.455 4.49H8.173C5.59 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.49 2 7.965 2ZM11.64 8.74a.745.745 0 0 0-.743.75v4.82l-1.574-1.6a.73.73 0 0 0-1.04 0 .76.76 0 0 0 0 1.06l2.832 2.87a.77.77 0 0 0 .525.22.768.768 0 0 0 .515-.22l2.841-2.87a.75.75 0 0 0-.01-1.06.73.73 0 0 0-1.04 0l-1.574 1.6V9.49c0-.42-.326-.75-.732-.75m3.506-5.834c0-.43.518-.645.813-.334l3.987 4.187a.477.477 0 0 1-.34.807c-.813.003-1.773 0-2.463-.007-1.095 0-1.997-.91-1.997-2.017Z"
    />
  </Svg>
);
export default IconlystPaperDownloadBold;
