import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapClickOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.006 5.25a.837.837 0 0 0-.837.837v9.104a.75.75 0 0 1-1.367.425L7.666 13.97a.985.985 0 0 0-1.164-.36c-.487.186-.713.694-.552 1.136.552 1.525 1.427 3.22 2.54 4.603.708.881 2.29 1.405 4.107 1.402 1.807-.003 3.487-.53 4.295-1.338.672-.672 1.235-1.74 1.517-2.946.283-1.203.268-2.465-.12-3.515-.327-.879-1.07-1.35-2.152-1.624-.819-.206-1.698-.27-2.58-.334q-.488-.033-.972-.078a.75.75 0 0 1-.679-.735l-.063-4.106a.837.837 0 0 0-.837-.824m-2.337.837a2.337 2.337 0 0 1 4.674-.036l.053 3.425.156.011c.913.066 1.994.144 2.951.386 1.305.329 2.62 1.011 3.192 2.557.514 1.39.507 2.962.175 4.379-.332 1.414-1.006 2.752-1.918 3.664-1.213 1.213-3.367 1.773-5.352 1.777-1.973.004-4.14-.545-5.28-1.962-1.234-1.536-2.183-3.383-2.78-5.031-.457-1.26.222-2.588 1.425-3.05a2.49 2.49 0 0 1 2.704.622z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.95 4.172a.75.75 0 0 1 .441.965 3.1 3.1 0 0 0-.196 1.098c0 1.138.596 2.113 1.453 2.617a.75.75 0 1 1-.76 1.293C7.568 9.37 6.694 7.9 6.694 6.235c0-.57.103-1.117.29-1.621a.75.75 0 0 1 .965-.442M14.633 6.264a.75.75 0 0 1 .59.881 4.49 4.49 0 0 1-2.04 2.964.75.75 0 1 1-.783-1.28 2.99 2.99 0 0 0 1.351-1.974.75.75 0 0 1 .882-.59M11.003 3.25c-.447 0-.87.11-1.245.309a.75.75 0 0 1-.7-1.327 4.16 4.16 0 0 1 1.945-.482c1.497 0 2.802.793 3.57 1.974a.75.75 0 0 1-1.258.817c-.515-.79-1.365-1.291-2.312-1.291"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapClickOutline;