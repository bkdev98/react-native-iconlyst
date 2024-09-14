import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArticleDocumentAiOutline = ({
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
      d="M10.767 20.02c0 .414.336.75.75.75h5.026c1.56 0 2.88-.556 3.808-1.552.922-.99 1.4-2.355 1.4-3.882V9.845c0-.776-.3-1.522-.838-2.081l-4.17-4.343a3 3 0 0 0-2.166-.924H8.683c-1.555 0-2.875.555-3.803 1.55-.923.99-1.403 2.355-1.403 3.884v3.595a.75.75 0 0 0 1.5 0V7.931c0-1.217.379-2.194 1-2.86.615-.66 1.523-1.074 2.706-1.074h5.893c.409 0 .8.167 1.084.462l4.17 4.343c.269.28.42.654.42 1.043v5.49c0 1.218-.378 2.195-.998 2.86-.614.66-1.521 1.075-2.71 1.075h-5.026a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.914 10.063h3.014a.75.75 0 0 0 0-1.5h-3.012a2.064 2.064 0 0 1-2.06-2.066V3.315a.75.75 0 0 0-1.5 0v3.181a3.565 3.565 0 0 0 3.558 3.566M6.064 13.867a.75.75 0 0 0-.704.49l-.119.323a3.7 3.7 0 0 1-2.18 2.183l-.322.119a.75.75 0 0 0 0 1.407l.323.119a3.7 3.7 0 0 1 2.18 2.183l.118.323a.75.75 0 0 0 1.407 0l.12-.323a3.7 3.7 0 0 1 2.18-2.183l.322-.12a.75.75 0 0 0 0-1.406l-.323-.12a3.7 3.7 0 0 1-2.18-2.182l-.119-.323a.75.75 0 0 0-.703-.49m1.353 3.818c-.53.364-.99.823-1.353 1.355a5.2 5.2 0 0 0-1.353-1.355c.53-.363.99-.823 1.353-1.354.363.531.822.99 1.353 1.354M11.574 9.905a.75.75 0 0 0-.718.532 1.7 1.7 0 0 1-1.127 1.129.75.75 0 0 0 0 1.435c.54.164.963.587 1.127 1.129a.75.75 0 0 0 1.435 0A1.7 1.7 0 0 1 13.418 13a.75.75 0 0 0 0-1.434 1.7 1.7 0 0 1-1.127-1.129.75.75 0 0 0-.717-.532m.162 2.378a3 3 0 0 0-.162.163 3 3 0 0 0-.163-.163q.084-.078.163-.162.078.084.162.162"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArticleDocumentAiOutline;
