import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGumroadBulk = ({
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
      d="M12.572 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.668 17.15c.907 0 1.644-.736 1.644-1.64v-3.7a1.65 1.65 0 0 0-1.644-1.651h-3.184c-.907 0-1.646.74-1.646 1.65v.972a1.65 1.65 0 0 0 1.646 1.649h.607a1.1 1.1 0 0 0 .81.36c.611 0 1.11-.498 1.11-1.11s-.5-1.11-1.112-1.11c-.32 0-.605.14-.808.36h-.607a.15.15 0 0 1-.146-.15v-.97c0-.084.064-.151.146-.151h3.184c.081 0 .144.067.144.15v3.7c0 .078-.064.14-.144.14H9.476a.144.144 0 0 1-.144-.14V8.85c0-.075.066-.14.144-.14h5.69c.202.219.486.36.807.36.612 0 1.111-.497 1.111-1.11 0-.611-.499-1.11-1.112-1.11-.32 0-.604.142-.807.36H9.476c-.907 0-1.644.737-1.644 1.64v6.66c0 .905.737 1.64 1.644 1.64z"
    />
  </Svg>
);
export default IconlystGumroadBulk;
