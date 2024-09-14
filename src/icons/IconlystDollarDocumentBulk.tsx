import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarDocumentBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.655 9.24c-.03-.01-.05 0-.08 0-.93 0-1.85 0-2.77-.01-.54 0-1.05-.11-1.52-.38-1.07-.62-1.64-1.55-1.66-2.79-.01-.99 0-1.98 0-2.98v-.1a.44.44 0 0 0-.32-.4c-.05-.01-.11-.01-.17-.01-1.67-.01-3.34-.01-5-.01-.24 0-.46.03-.69.07-.88.15-1.64.55-2.26 1.18-.83.84-1.25 1.86-1.26 3.05V17c0 .17.01.33.02.49.05.64.24 1.23.55 1.79.36.65.86 1.18 1.49 1.59.71.45 1.49.69 2.33.69 2.5.01 5 0 7.5 0 .3 0 .6-.02.89-.08.83-.18 1.54-.57 2.13-1.16.34-.34.62-.73.83-1.17.22-.47.36-.96.39-1.47.02-.27.02-.53.02-.8V9.65a.414.414 0 0 0-.42-.41"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.994 5.913q0 .242.057.479c.206.84.959 1.44 1.825 1.453q.458.004.916.006l.237.002q.618 0 1.235-.004a.4.4 0 0 0 .336-.192.44.44 0 0 0-.045-.567q-.36-.384-.723-.762L16.51 3.89c-.251-.264-.5-.53-.754-.79a.44.44 0 0 0-.642.012.45.45 0 0 0-.121.329v2.471"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.145 17.15v-.33c1.13-.01 2.03-.91 2.03-2.04s-.91-2.05-2.04-2.05h-1.48c-.3 0-.54-.23-.54-.54 0-.29.25-.54.54-.54h2.4c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75h-.91v-.34a.749.749 0 1 0-1.5 0v.34c-1.12.01-2.03.92-2.03 2.04 0 1.13.92 2.04 2.04 2.04h1.48c.3 0 .54.25.54.55s-.24.54-.54.54h-2.4a.749.749 0 1 0 0 1.5h.91v.33c0 .42.34.75.75.75.42 0 .75-.33.75-.75"
    />
  </Svg>
);
export default IconlystDollarDocumentBulk;
