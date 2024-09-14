import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonaCoinBulk = ({
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
      d="M12.5 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 17.604c-3.446 0-6.146-1.986-6.146-4.52a3.98 3.98 0 0 1 1.412-2.892l.716-3.224A.724.724 0 0 1 9.8 6.74l1.24 1.971.199-.039a6.6 6.6 0 0 1 2.545 0l.178.037L15.2 6.74a.723.723 0 0 1 1.318.228l.716 3.218q.59.492.947 1.16c.282.526.442 1.118.465 1.71 0 2.563-2.7 4.55-6.146 4.55m-.013-4.372.618-.718a.75.75 0 1 1 1.137.979l-1.197 1.389a.75.75 0 0 1-.568.26h-.007a.75.75 0 0 1-.57-.27l-1.155-1.39a.75.75 0 1 1 1.153-.958zm-1.62-2.566a.75.75 0 0 0-1.055-.103l-.645.531a.75.75 0 1 0 .952 1.158l.645-.53a.75.75 0 0 0 .104-1.056m3.266 0a.75.75 0 0 1 1.056-.102l.645.53c.32.263.366.736.104 1.056a.75.75 0 0 1-1.056.102l-.645-.53a.75.75 0 0 1-.104-1.055"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonaCoinBulk;
