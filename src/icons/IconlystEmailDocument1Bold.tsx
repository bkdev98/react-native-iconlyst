import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDocument1Bold = ({
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
      d="M21.5 10.025v6.1c0 3.08-2.15 5.4-5 5.4h-9c-2.85 0-5-2.32-5-5.4v-6.1c0-2.26 1.164-4.148 2.981-4.977a.19.19 0 0 1 .269.178v7.149c0 .11-.09.198-.2.215-.375.06-.7.293-.7.735 0 .41.34.75.75.75h12.9c.41 0 .75-.34.75-.75 0-.442-.325-.675-.7-.735-.11-.017-.2-.105-.2-.215V5.274a.19.19 0 0 1 .273-.177c1.754.856 2.877 2.72 2.877 4.928"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.4 6.975H9.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.6c.41 0 .75.34.75.75s-.34.75-.75.75m-2.4 3.2H9.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H12c.41 0 .75.34.75.75s-.34.75-.75.75m3.2-7.7H8.9c-.88 0-1.65.77-1.65 1.65v8.25c0 .11.09.2.2.2h9.2a.2.2 0 0 0 .2-.2v-8.25c0-.88-.77-1.65-1.65-1.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailDocument1Bold;
