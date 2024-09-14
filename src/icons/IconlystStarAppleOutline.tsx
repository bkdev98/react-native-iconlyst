import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarAppleOutline = ({
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
      d="M8.723 2.327a.75.75 0 0 1 .662 0c2.294 1.129 3.919 2.931 4.897 4.99a.75.75 0 0 1-1.355.644c-.797-1.678-2.081-3.144-3.873-4.117-3.3 1.792-4.896 5.278-4.854 8.662.044 3.507 1.833 6.713 5.088 7.781a.75.75 0 0 1-.468 1.426c-4.03-1.324-6.07-5.234-6.12-9.188-.05-3.964 1.888-8.164 6.023-10.198"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.054 2.25a.75.75 0 0 1 .585.28c.68.847 1.186 2.002 1.553 3.277.369 1.285.61 2.741.731 4.23a.75.75 0 0 1-1.495.122c-.115-1.414-.342-2.768-.678-3.937a10.4 10.4 0 0 0-.696-1.826c-.385.758-.705 1.72-.948 2.83-.353 1.614-.524 3.467-.515 5.286.009 1.821.198 3.582.552 5.017.364 1.474.866 2.458 1.39 2.894a.75.75 0 1 1-.958 1.154c-.914-.76-1.51-2.153-1.888-3.69-.389-1.575-.587-3.459-.596-5.367-.01-1.911.17-3.875.55-5.615.376-1.722.966-3.3 1.828-4.375a.75.75 0 0 1 .585-.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.664 8.977a.75.75 0 0 1 .642.367l1.556 2.623c.207.349.57.576.974.608l2.775.224a.75.75 0 0 1 .455 1.293l-2.36 2.228a1.25 1.25 0 0 0-.37 1.14l.543 2.868a.75.75 0 0 1-1.107.792l-3.089-1.748-3.236 1.755a.75.75 0 0 1-1.093-.806l.573-2.866a1.25 1.25 0 0 0-.361-1.148l-2.317-2.219a.75.75 0 0 1 .458-1.289l2.748-.224c.4-.032.76-.255.967-.598l1.598-2.638a.75.75 0 0 1 .644-.362m-.01 2.21-.948 1.567a2.75 2.75 0 0 1-2.13 1.316l-1.085.089 1.112 1.065c.68.65.979 1.603.795 2.525l-.26 1.296 2.196-1.19a.75.75 0 0 1 .727.006l2.044 1.158-.242-1.28a2.75 2.75 0 0 1 .814-2.51l1.133-1.07-1.094-.088a2.75 2.75 0 0 1-2.145-1.339z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.66 13.515a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M13.802 15.555a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M15.887 15.555a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarAppleOutline;
