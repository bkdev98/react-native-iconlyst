import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTransfer2Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M20.984 10.346a.3.3 0 0 0 .3-.3v-3.15c0-3.17-2.25-5.3-5.6-5.3h-7.9c-3.239 0-5.5 2.179-5.5 5.3v3.15a.3.3 0 0 0 .3.3zM2.583 11.847a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h3.784a.3.3 0 0 0 .3-.3v-1.203a.32.32 0 0 0-.189-.288 2.499 2.499 0 0 1-.624-4.071l1.22-1.15a2.5 2.5 0 0 1 2.143-1.13 2.5 2.5 0 0 1 1.763.68l.74.697c.136.127.353.1.477-.038a2.5 2.5 0 0 1 1.87-.84c.498 0 .963.146 1.353.398.244.157.663-.002.663-.292v-.913a.3.3 0 0 0-.3-.3z" />
    </G>
    <Path
      fill={props.color}
      d="M16.117 17.22a.74.74 0 0 1-.514-.205l-.486-.457v4.596a.75.75 0 0 1-1.5 0v-4.502l-.387.363a.75.75 0 1 1-1.027-1.092l1.7-1.6a.75.75 0 0 1 1.027 0l1.701 1.6a.75.75 0 0 1-.514 1.296M19.266 22.405a.75.75 0 0 1-.514-.204l-1.7-1.6a.75.75 0 1 1 1.027-1.092l.437.411v-4.466a.75.75 0 0 1 1.5 0v4.466l.437-.41a.75.75 0 1 1 1.027 1.092l-1.7 1.6a.75.75 0 0 1-.514.203"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.184 5.746h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5m4.7 0h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5M7.685 16.447h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerTransfer2Bulk;
