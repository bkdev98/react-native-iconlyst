import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseCheckBulk = ({
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
      <Path d="M18.715 11.626a.205.205 0 0 0 .219-.204c-.007-.954-.008-2.286-.013-2.873-.001-.141-.136-.213-.256-.137a5 5 0 0 1-.25.152c-1.3.73-2.69 1.07-4.12 1.28-.67.11-1.34.17-2.01.21-1.3.09-2.59.05-3.88-.1-.94-.1-1.87-.27-2.78-.53-.72-.2-1.42-.46-2.08-.84q-.126-.072-.256-.149a.199.199 0 0 0-.302.171c.002.72.006 2.361-.001 3.248-.01.44.14.78.42 1.08.42.44.93.72 1.46.95.78.34 1.6.55 2.43.71.81.16 1.62.26 2.44.3a22 22 0 0 0 2.052.023.2.2 0 0 0 .155-.082 7.88 7.88 0 0 1 6.772-3.209M10.716 16.704c-.87 0-1.75-.05-2.61-.18-.74-.11-1.47-.25-2.2-.42-.85-.2-1.67-.5-2.44-.95q-.093-.056-.188-.116a.19.19 0 0 0-.29.165c.004.71.013 2.346-.002 3.22-.01.52.19.91.53 1.23.41.38.88.63 1.37.84.87.37 1.78.59 2.7.75.87.15 1.75.24 2.64.26q.09.007.18.009a.202.202 0 0 0 .197-.25 7.8 7.8 0 0 1-.197-1.748c0-.917.154-1.79.447-2.613a.147.147 0 0 0-.137-.197" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.502 6.448c.458.438 1.003.71 1.568.937 1.02.409 2.078.633 3.152.778.906.122 1.818.184 2.553.173 1.713.002 3.233-.143 4.73-.52.745-.188 1.475-.433 2.156-.82.375-.212.726-.461.996-.823.358-.48.364-1.04 0-1.512a2.7 2.7 0 0 0-.424-.44c-.582-.474-1.25-.75-1.937-.978-1.224-.405-2.482-.605-3.754-.695-1.736-.124-3.466-.061-5.184.259-.933.173-1.848.416-2.719.827-.465.219-.908.48-1.264.882-.296.334-.47.715-.345 1.192.08.304.26.537.472.74M20.795 15.6a.75.75 0 0 0-1.06 0l-3.744 3.747a.2.2 0 0 1-.283 0l-1.322-1.326a.749.749 0 1 0-1.062 1.058l1.993 2a.75.75 0 0 0 1.062 0l4.416-4.418a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseCheckBulk;
