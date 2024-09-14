import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveControllerBulk = ({
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
      d="M9.4 11.948h-.65v.65c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.65H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.75c0-.41.34-.75.75-.75s.75.34.75.75v.75h.65c.41 0 .75.34.75.75s-.34.75-.75.75m11.13-8.48a.754.754 0 0 0-1.06 0l-2.11 2.11c-.97-.33-2.3-.53-3.83.4-1.42.89-1.81.81-3.17-.01-2.2-1.32-3.9-.46-4.58-.12-3.19 1.6-3.28 8.88-3.28 8.95 0 1.31.19 3.11 1.87 3.77l-.9.9c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l16-16c.29-.29.29-.77 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 14.798c0 1.36-.2 3.02-1.79 3.75-.51.22-1 .3-1.45.3-.84 0-1.55-.3-1.98-.67-.32-.22-.54-.5-.75-.77-.26-.35-.51-.67-1.07-.97-.32-.16-.94-.34-1.66-.34-.2 0-.38-.12-.46-.31s-.04-.4.11-.54l2.64-2.63c.062-.063.174-.018.188.07.023.146.075.324.192.44a.75.75 0 1 0 1.06-1.06.73.73 0 0 0-.355-.191c-.098-.023-.172-.18-.1-.251l.415-.41c.063-.062.178-.017.193.07.025.154.078.341.187.442.146.134.33.22.53.22a.75.75 0 0 0 .53-1.28.73.73 0 0 0-.358-.192c-.1-.022-.173-.177-.101-.249l1.979-1.979a.48.48 0 0 1 .44-.14c.16.03.3.14.37.29 1.17 2.66 1.24 6.36 1.24 6.4"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRemoveControllerBulk;
