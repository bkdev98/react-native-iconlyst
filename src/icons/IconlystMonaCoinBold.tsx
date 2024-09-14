import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonaCoinBold = ({
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
      d="M12 17.606c-3.446 0-6.146-1.986-6.146-4.521a3.98 3.98 0 0 1 1.412-2.891l.716-3.224A.724.724 0 0 1 9.3 6.74l1.24 1.972.199-.04a6.6 6.6 0 0 1 2.545 0l.178.038L14.7 6.74a.723.723 0 0 1 1.318.228l.716 3.219q.59.492.947 1.159c.282.527.442 1.119.465 1.71 0 2.564-2.7 4.55-6.146 4.55m0-15.101c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.368 10.668a.75.75 0 0 0-1.056-.103l-.645.53a.75.75 0 1 0 .952 1.159l.645-.53a.75.75 0 0 0 .104-1.056M14.689 10.565a.749.749 0 1 0-.952 1.158l.645.53a.752.752 0 0 0 1.056-.102.75.75 0 0 0-.104-1.056zM12.605 12.515l-.618.718-.589-.708a.75.75 0 1 0-1.153.96l1.155 1.388a.75.75 0 0 0 .57.271h.007a.75.75 0 0 0 .568-.26l1.197-1.39a.75.75 0 0 0-1.137-.979"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonaCoinBold;
