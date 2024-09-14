import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIotaBold = ({
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
      d="M6.083 13.38a1 1 0 0 0-.88-1.107 1.01 1.01 0 0 0-1.107.877c-.029.247-.656 6.055 3 8.587a1 1 0 1 0 1.139-1.644c-2.667-1.847-2.157-6.665-2.152-6.714"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.82 20.077c-4.778-3.162-4.51-7.03-4.497-7.194a1 1 0 0 0-1.99-.191c-.022.21-.447 5.194 5.383 9.053a1 1 0 0 0 1.104-1.668"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.423 19.037c-6.13-2.442-6.927-7.038-6.959-7.241a1 1 0 0 0-1.979.294c.035.24.943 5.915 8.198 8.804a1.001 1.001 0 0 0 1.299-.558 1 1 0 0 0-.559-1.3"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.956 10.603a1 1 0 0 0 .755-1.853c-.215-.087-5.362-2.114-11.369 3.132a1 1 0 1 0 1.315 1.506c5.022-4.386 9.113-2.86 9.3-2.785"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.583 8.955c.167 0 .337-.042.493-.13 4.884-2.774 7.846-.66 7.986-.555a1 1 0 0 0 1.22-1.585c-.164-.127-4.078-3.07-10.194.4a1 1 0 0 0 .495 1.87"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.118 4.543c2.78-1.497 6.39 1.342 6.426 1.371a1 1 0 0 0 1.252-1.559C13.61 4.202 9.122.651 5.17 2.783a1 1 0 1 0 .949 1.76"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.867 13.228a1 1 0 0 0 1.304 1.517c.178-.153 4.35-3.825 3.087-11.894a1.005 1.005 0 0 0-1.142-.834 1 1 0 0 0-.833 1.143c1.079 6.893-2.261 9.932-2.416 10.068"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.84 14.486a1 1 0 0 0 .866 1.803c.184-.087 4.496-2.216 4.72-9.483a1 1 0 0 0-.968-1.031c-.556.01-1.013.418-1.03.969-.185 5.965-3.435 7.666-3.587 7.742"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.173 9.681c-.551-.04-1.021.396-1.05.948-.171 3.384-4.308 5.304-4.364 5.329a1.001 1.001 0 0 0 .82 1.825c.217-.097 5.307-2.434 5.542-7.052a1 1 0 0 0-.948-1.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIotaBold;
