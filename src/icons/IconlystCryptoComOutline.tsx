import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoComOutline = ({
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
      d="M6.728 4.134c.316-.547.9-.884 1.53-.884h7.983c.632 0 1.215.337 1.531.884l3.991 6.915c.316.547.316 1.22 0 1.767l-3.991 6.912c-.316.547-.9.883-1.53.883H8.258a1.77 1.77 0 0 1-1.53-.883l-3.992-6.912a1.77 1.77 0 0 1 0-1.767zm1.53.616a.27.27 0 0 0-.23.134l-3.992 6.915a.27.27 0 0 0 0 .267l3.991 6.912a.27.27 0 0 0 .232.133h7.982a.27.27 0 0 0 .232-.133l3.991-6.912a.27.27 0 0 0 0-.267l-3.991-6.915a.27.27 0 0 0-.232-.134z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.898 11.83a.75.75 0 0 1 .85-.031l1.44.916a.75.75 0 0 1 .347.632v1.325l.856.82a.75.75 0 0 1 .231.542v.492a.75.75 0 0 1-.239.549l-1.05.977a.75.75 0 0 1-.51.2h-.885a.75.75 0 0 1-.65-.375l-2.221-3.858a.75.75 0 0 1 .202-.976zm.481 1.512-.68.506 1.672 2.905h.157l.512-.478-.774-.741a.75.75 0 0 1-.231-.542v-1.233zM15.748 11.803a.75.75 0 0 1 .86.03l1.626 1.224a.75.75 0 0 1 .199.973l-2.21 3.846a.75.75 0 0 1-.65.377H14.7a.75.75 0 0 1-.508-.198l-1.05-.966a.75.75 0 0 1-.242-.552v-.492c0-.204.083-.4.23-.54l.854-.821v-1.325a.75.75 0 0 1 .34-.629zm-.264 1.962v1.238a.75.75 0 0 1-.23.541l-.77.74.508.469h.147l1.663-2.896-.676-.51z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.05 10.587a.75.75 0 0 1 .675-.421h3.052a.75.75 0 0 1 .582 1.223l-.863 1.06.118 1.153a.75.75 0 0 1-.746.826h-1.149l-.111.004a.75.75 0 0 1-.77-.827l.122-1.165-.827-1.063a.75.75 0 0 1-.082-.79M8.839 6.365a.75.75 0 0 1 .725-.558h5.338a.75.75 0 0 1 .722.548l.645 2.304a.75.75 0 0 1-.722.952H8.953a.75.75 0 0 1-.725-.942zm1.302.942-.213.804h4.63l-.225-.804z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCryptoComOutline;
