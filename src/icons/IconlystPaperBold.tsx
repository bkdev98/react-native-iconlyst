import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperBold = ({
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
      d="M13.252 2c.258 0 .456.21.456.46v3.22c0 1.83 1.495 3.33 3.307 3.34.752 0 1.346.01 1.802.01h.169c.304-.003.714-.01 1.068-.01.248 0 .446.2.446.45v8.04c0 2.48-1.99 4.49-4.446 4.49h-7.88C5.598 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.965 2Zm1.06 12.9H8.926a.743.743 0 0 0-.743.74c0 .41.337.75.743.75h5.386c.406 0 .742-.34.742-.75s-.336-.74-.742-.74m-2.04-5H8.926a.75.75 0 0 0-.743.75c0 .41.337.74.743.74h3.346c.406 0 .743-.33.743-.74s-.337-.75-.743-.75m2.879-6.994c0-.431.518-.645.814-.334l3.986 4.187a.477.477 0 0 1-.34.807c-.814.003-1.773 0-2.463-.007-1.095 0-1.997-.911-1.997-2.017Z"
    />
  </Svg>
);
export default IconlystPaperBold;
