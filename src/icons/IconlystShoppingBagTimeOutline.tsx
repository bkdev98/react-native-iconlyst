import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagTimeOutline = ({
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
      d="M3.922 3.807c.941-1.009 2.28-1.573 3.858-1.573h7.992c1.582 0 2.921.564 3.862 1.574.935 1.004 1.42 2.388 1.42 3.938v2.92a.75.75 0 0 1-1.5 0v-2.92c0-1.24-.385-2.237-1.018-2.916-.627-.673-1.553-1.096-2.764-1.096H7.78c-1.207 0-2.133.422-2.76 1.096C4.385 5.51 4 6.506 4 7.746v7.53c0 1.24.384 2.237 1.017 2.916.626.674 1.552 1.096 2.763 1.096h3.382a.75.75 0 0 1 0 1.5H7.78c-1.582 0-2.921-.564-3.862-1.574C2.984 18.21 2.5 16.825 2.5 15.276v-7.53c0-1.551.487-2.935 1.422-3.939"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.387 7.742a.75.75 0 0 1 .75.75 2.641 2.641 0 1 0 5.282 0 .75.75 0 0 1 1.5 0 4.142 4.142 0 0 1-8.282 0 .75.75 0 0 1 .75-.75M17.546 14.36a2.954 2.954 0 1 0 0 5.907 2.954 2.954 0 0 0 0-5.908m-4.454 2.953a4.454 4.454 0 1 1 8.908 0 4.454 4.454 0 0 1-8.908 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.525 15.324a.75.75 0 0 1 .75.75v1.08l.806.481a.75.75 0 0 1-.77 1.288l-1.17-.7a.75.75 0 0 1-.366-.644v-1.505a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagTimeOutline;
