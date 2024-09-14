import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationOpenBold = ({
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
      d="M7.674 9.713c.378-.872.871-1.69 1.473-2.44a.5.5 0 0 0-.104-.723c-.5-.352-1.004-.693-1.508-1.035a.5.5 0 0 0-.572.008A10.92 10.92 0 0 0 2.8 11.518c-.32 1.177-.672 3.42.588 5.21.82 1.156 2.241 1.842 3.646 1.842a4.1 4.1 0 0 0 1.108-.149c1.437-.396 2.554-1.508 2.987-2.975.45-1.526.102-3.129-.932-4.289a4.6 4.6 0 0 0-2.523-1.444M20.377 11.158a4.6 4.6 0 0 0-2.523-1.444c.378-.874.873-1.693 1.472-2.442a.5.5 0 0 0-.103-.722q-.752-.525-1.508-1.035a.5.5 0 0 0-.572.008 10.92 10.92 0 0 0-4.163 5.995c-.322 1.179-.67 3.423.586 5.21.821 1.157 2.242 1.843 3.648 1.843.374 0 .748-.049 1.108-.149 1.437-.396 2.554-1.507 2.987-2.973.45-1.526.102-3.131-.932-4.291"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuotationOpenBold;
